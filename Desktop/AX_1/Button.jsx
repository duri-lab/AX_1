import React from 'react';

/**
 * Primary Button Component
 *
 * 디자인 시스템 규칙 (claude.rtf 기준):
 * - Primary 컬러: #313E83 (브랜드 메인 컬러)
 * - 추가 컬러: Info(#1890FF), Success(#00A925), Warning(#FFBC1F), Error(#FA332D), Contrast(#11111f), Inherit(#e5e5e5)
 * - Hover 효과: 기본 색상 대비 10~20% 어둡게 또는 투명도 조절
 * - Active 효과: #1E234A
 * - 텍스트: 흰색
 * - 사이즈: xsmall, small, medium(default), large
 * - 스타일: contained(default), outlined
 * - 상태: disabled, loading
 * - 둥근 모서리: 8px
 * - 전환 효과: 부드러운 애니메이션
 * - 8px 그리드 시스템 준수
 */

// 사이즈별 스타일 정의
const sizeStyles = {
  xsmall: 'px-3 py-1 text-xs', // Figma 'XSmall'
  small: 'px-3 py-1.5 text-sm', // Figma 'Small' (approx 11px/5px)
  medium: 'px-6 py-3 text-base', // Figma 'Medium'
  large: 'px-8 py-4 text-lg', // Figma 'Large'
};

const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  color = 'primary', // primary, info, success, warning, error, contrast, inherit
  size = 'medium',
  variant = 'contained', // contained, outlined
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const isDisabled = disabled || loading;

  const baseStyles = `
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    font-medium
    rounded-lg
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    transition-all
    duration-200
    inline-flex
    items-center
    justify-center
    gap-2
  `;

  const colorStyles = {
    primary: {
      contained: 'bg-[#313E83] text-white focus:ring-[#313E83] hover:bg-[#272F66] active:bg-[#1E234A]',
      outlined: 'bg-transparent text-[#313E83] border border-[#313E83] focus:ring-[#313E83] hover:bg-[#313E83]/5 active:bg-[#313E83]/10',
    },
    info: {
      contained: 'bg-[#1890FF] text-white focus:ring-[#1890FF] hover:bg-[#1373cc] active:bg-[#0e5699]',
      outlined: 'bg-transparent text-[#1890FF] border border-[#1890FF] focus:ring-[#1890FF] hover:bg-[#1890FF]/5 active:bg-[#1890FF]/10',
    },
    success: {
      contained: 'bg-[#00A925] text-white focus:ring-[#00A925] hover:bg-[#00871E] active:bg-[#005012]',
      outlined: 'bg-transparent text-[#00A925] border border-[#00A925] focus:ring-[#00A925] hover:bg-[#00A925]/5 active:bg-[#00A925]/10',
    },
    warning: {
      contained: 'bg-[#FFBC1F] text-white focus:ring-[#FFBC1F] hover:bg-[#A37200] active:bg-[#604801]',
      outlined: 'bg-transparent text-[#FFBC1F] border border-[#FFBC1F] focus:ring-[#FFBC1F] hover:bg-[#FFBC1F]/5 active:bg-[#FFBC1F]/10',
    },
    error: {
      contained: 'bg-[#FA332D] text-white focus:ring-[#FA332D] hover:bg-[#C31C17] active:bg-[#6F0805]',
      outlined: 'bg-transparent text-[#FA332D] border border-[#FA332D] focus:ring-[#FA332D] hover:bg-[#FA332D]/5 active:bg-[#FA332D]/10',
    },
    contrast: {
      contained: 'bg-[#11111f] text-white focus:ring-[#11111f] hover:bg-[#0d0d17] active:bg-[#090910]',
      outlined: 'bg-transparent text-[#11111f] border border-[#11111f] focus:ring-[#11111f] hover:bg-[#11111f]/5 active:bg-[#11111f]/10',
    },
    inherit: {
      contained: 'bg-[#e5e5e5] text-[#11111f] focus:ring-[#e5e5e5] hover:bg-[#cccccc] active:bg-[#b3b3b3]',
      outlined: 'bg-transparent text-[#11111f] border border-[#e5e5e5] focus:ring-[#e5e5e5] hover:bg-[#e5e5e5]/10 active:bg-[#e5e5e5]/20',
    },
  };

  const getVariantStyle = () => {
    const style = colorStyles[color]?.[variant] || colorStyles.primary.contained;

    if (isDisabled) {
      if (variant === 'contained') {
        // Remove hover/active/focus classes from the base style string is hard, 
        // but we can just append disabling classes that might rely on CSS precedence or utility logic?
        // Actually, better to just return the base color style AND opacity/cursor utils.
        // Hover/Active are usually handled by pseudo-modifiers in Tailwind (e.g. hover:bg-...)
        // We need to ensure hover doesn't trigger. 
        // Tailwind 'pointer-events-none' prevents hover.
        return `${style} opacity-40 cursor-not-allowed pointer-events-none`;
      }
      return `${style} opacity-40 cursor-not-allowed pointer-events-none`;
    }
    return `${style} cursor-pointer`;
  };

  return (
    <button
      type={type}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      className={`
        ${baseStyles}
        ${getVariantStyle()}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default PrimaryButton;
