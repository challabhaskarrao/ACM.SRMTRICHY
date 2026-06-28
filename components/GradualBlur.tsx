'use client';

import React, { useMemo } from 'react';
import './GradualBlur.css';

type Position = 'top' | 'bottom' | 'left' | 'right';
type CurveType = 'linear' | 'bezier' | 'ease-in' | 'ease-out';
type Target = 'parent' | 'fixed';
type Preset = 'page-header' | 'page-footer' | 'none';

interface GradualBlurProps {
  position?: Position;
  height?: string;
  width?: string;
  strength?: number;
  divCount?: number;
  curve?: CurveType;
  exponential?: boolean;
  opacity?: number;
  target?: Target;
  preset?: Preset;
  className?: string;
  style?: React.CSSProperties;
}

function getEasingValue(
  index: number,
  total: number,
  curve: CurveType,
  exponential: boolean
): number {
  const t = index / (total - 1);

  let value: number;
  switch (curve) {
    case 'ease-in':
      value = t * t;
      break;
    case 'ease-out':
      value = 1 - (1 - t) * (1 - t);
      break;
    case 'bezier':
      // Cubic bezier approximation (ease-in-out)
      value = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      break;
    case 'linear':
    default:
      value = t;
      break;
  }

  if (exponential) {
    value = Math.pow(value, 2);
  }

  return value;
}

const PRESET_CONFIGS: Record<Preset, Partial<GradualBlurProps>> = {
  'page-header': {
    position: 'top',
    height: '5rem',
    strength: 8,
    divCount: 8,
    curve: 'bezier',
    exponential: true,
    opacity: 1,
    target: 'fixed',
  },
  'page-footer': {
    position: 'bottom',
    height: '5rem',
    strength: 8,
    divCount: 8,
    curve: 'bezier',
    exponential: true,
    opacity: 1,
    target: 'fixed',
  },
  none: {},
};

export default function GradualBlur({
  position: positionProp,
  height: heightProp,
  width: widthProp,
  strength: strengthProp,
  divCount: divCountProp,
  curve: curveProp,
  exponential: exponentialProp,
  opacity: opacityProp,
  target: targetProp,
  preset = 'none',
  className = '',
  style = {},
}: GradualBlurProps) {
  const presetConfig = PRESET_CONFIGS[preset] || {};

  const position: Position = positionProp ?? presetConfig.position ?? 'bottom';
  const height: string = heightProp ?? presetConfig.height ?? '4rem';
  const width: string = widthProp ?? presetConfig.width ?? '4rem';
  const strength: number = strengthProp ?? presetConfig.strength ?? 2;
  const divCount: number = divCountProp ?? presetConfig.divCount ?? 5;
  const curve: CurveType = curveProp ?? presetConfig.curve ?? 'linear';
  const exponential: boolean = exponentialProp ?? presetConfig.exponential ?? false;
  const opacity: number = opacityProp ?? presetConfig.opacity ?? 1;
  const target: Target = targetProp ?? presetConfig.target ?? 'parent';

  const isHorizontal = position === 'left' || position === 'right';

  const layers = useMemo(() => {
    return Array.from({ length: divCount }, (_, i) => {
      const t = getEasingValue(i, divCount, curve, exponential);
      const blurValue = t * strength;

      const layerSize = isHorizontal
        ? `${(100 / divCount).toFixed(2)}%`
        : `${(100 / divCount).toFixed(2)}%`;

      const layerStyle: React.CSSProperties = {
        backdropFilter: `blur(${blurValue.toFixed(3)}px)`,
        WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}px)`,
        opacity,
      };

      if (isHorizontal) {
        const sizePercent = 100 / divCount;
        if (position === 'left') {
          layerStyle.left = `${i * sizePercent}%`;
          layerStyle.width = `${sizePercent}%`;
          layerStyle.top = 0;
          layerStyle.bottom = 0;
        } else {
          layerStyle.right = `${i * sizePercent}%`;
          layerStyle.width = `${sizePercent}%`;
          layerStyle.top = 0;
          layerStyle.bottom = 0;
        }
      } else {
        const sizePercent = 100 / divCount;
        if (position === 'top') {
          layerStyle.top = `${i * sizePercent}%`;
        } else {
          layerStyle.bottom = `${i * sizePercent}%`;
        }
        layerStyle.height = `${sizePercent}%`;
      }

      return layerStyle;
    });
  }, [divCount, strength, curve, exponential, opacity, position, isHorizontal]);

  const containerStyle: React.CSSProperties = {
    position: target === 'fixed' ? 'fixed' : 'absolute',
    zIndex: 50,
    pointerEvents: 'none',
    ...style,
  };

  if (isHorizontal) {
    containerStyle.top = 0;
    containerStyle.bottom = 0;
    containerStyle.width = width;
    if (position === 'left') containerStyle.left = 0;
    else containerStyle.right = 0;
  } else {
    containerStyle.left = 0;
    containerStyle.right = 0;
    containerStyle.height = height;
    if (position === 'top') containerStyle.top = 0;
    else containerStyle.bottom = 0;
  }

  return (
    <div
      className={`gradual-blur gradual-blur--${position} ${className}`}
      style={containerStyle}
      aria-hidden="true"
    >
      {layers.map((layerStyle, i) => (
        <div
          key={i}
          className="gradual-blur__layer"
          style={{ ...layerStyle, position: 'absolute' }}
        />
      ))}
    </div>
  );
}
