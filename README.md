# Primary Button Component

디자인 시스템 규칙에 따른 Primary 버튼 컴포넌트입니다.

**중요: 모든 작업은 `claude.rtf` 파일의 디자인 토큰을 기준으로 합니다.**

## 디자인 시스템 규칙 (claude.rtf 기준)

### 색상 (브랜드 컬러)
- **Primary**: `#313E83` (브랜드 메인 컬러)
- **Hover 상태**: `#272F66`
- **Active 상태**: `#1E234A`
- **텍스트**: `#FFFFFF` (흰색)

### 크기 및 간격 (8px 그리드 시스템)
- **Small**: `px-4 py-2 text-sm` (16px × 8px)
- **Medium (기본)**: `px-6 py-3 text-base` (24px × 12px)
- **Large**: `px-8 py-4 text-lg` (32px × 16px)
- **둥근 모서리**: `rounded-lg` (8px)
- **폰트 굵기**: `font-medium` (500)
- **폰트 패밀리**: Pretendard, sans-serif

### 상태
- **일반**: 활성화된 기본 상태
- **Disabled**: 50% 투명도, 클릭 불가
- **Loading**: 스피너 애니메이션 표시, 클릭 불가

### 인터랙션
- **Hover 효과**: 배경색이 약간 어두워짐
- **Active 효과**: 배경색이 더 어두워짐
- **Focus 효과**: 파란색 링 표시 (`focus:ring-2 focus:ring-blue-500`)
- **전환 애니메이션**: 200ms 부드러운 색상 전환

## 사용 방법

### 기본 사용
\`\`\`jsx
import PrimaryButton from './Button';

function App() {
  return (
    <PrimaryButton onClick={() => console.log('클릭!')}>
      클릭하세요
    </PrimaryButton>
  );
}
\`\`\`

### Form에서 사용
\`\`\`jsx
<form onSubmit={handleSubmit}>
  <PrimaryButton type="submit">
    제출
  </PrimaryButton>
</form>
\`\`\`

### 사이즈 Variations
\`\`\`jsx
<PrimaryButton size="small" onClick={handleClick}>
  Small
</PrimaryButton>

<PrimaryButton size="medium" onClick={handleClick}>
  Medium (기본)
</PrimaryButton>

<PrimaryButton size="large" onClick={handleClick}>
  Large
</PrimaryButton>
\`\`\`

### 상태 관리
\`\`\`jsx
// 비활성화 상태
<PrimaryButton disabled onClick={handleClick}>
  비활성화
</PrimaryButton>

// 로딩 상태
<PrimaryButton loading onClick={handleClick}>
  로딩 중
</PrimaryButton>

// 동적 로딩 상태
const [loading, setLoading] = useState(false);

<PrimaryButton loading={loading} onClick={handleSubmit}>
  {loading ? '처리 중...' : '제출'}
</PrimaryButton>
\`\`\`

### 전체 너비
\`\`\`jsx
<PrimaryButton fullWidth onClick={handleClick}>
  전체 너비 버튼
</PrimaryButton>
\`\`\`

### 조합 사용
\`\`\`jsx
<PrimaryButton
  size="large"
  fullWidth
  loading={isSubmitting}
  onClick={handleSubmit}
>
  {isSubmitting ? '전송 중...' : '전송하기'}
</PrimaryButton>
\`\`\`

## Props

| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| children | ReactNode | - | 버튼 내부 콘텐츠 |
| onClick | function | - | 클릭 이벤트 핸들러 |
| type | 'button' \| 'submit' \| 'reset' | 'button' | 버튼 타입 |
| size | 'small' \| 'medium' \| 'large' | 'medium' | 버튼 크기 |
| disabled | boolean | false | 비활성화 상태 |
| loading | boolean | false | 로딩 상태 (스피너 표시) |
| fullWidth | boolean | false | 전체 너비 사용 여부 |
| className | string | '' | 추가 Tailwind 클래스 |

## 설치

Tailwind CSS가 필요합니다:

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

## 파일 구조

- `Button.jsx` - Primary Button 컴포넌트
- `ButtonExample.jsx` - 사용 예제
- `tailwind.config.js` - Tailwind 설정 파일
