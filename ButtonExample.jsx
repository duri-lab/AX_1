import React, { useState } from 'react';
import PrimaryButton from './Button';

/**
 * Primary Button 사용 예제
 */
const ButtonExample = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('작업 완료!');
    }, 2000);
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Primary Button 예제</h1>

      {/* 사이즈 Variations */}
      <div>
        <h2 className="text-xl font-semibold mb-4">사이즈 Variations</h2>
        <div className="flex items-center gap-4">
          <PrimaryButton size="xsmall" onClick={handleClick}>
            XSmall
          </PrimaryButton>
          <PrimaryButton size="small" onClick={handleClick}>
            Small
          </PrimaryButton>
          <PrimaryButton size="medium" onClick={handleClick}>
            Medium (기본)
          </PrimaryButton>
          <PrimaryButton size="large" onClick={handleClick}>
            Large
          </PrimaryButton>
        </div>
      </div>



      {/* 스타일 Variations */}
      <div>
        <h2 className="text-xl font-semibold mb-4">스타일 Variations</h2>
        <div className="flex items-center gap-4">
          <PrimaryButton variant="contained" onClick={handleClick}>
            Contained (기본)
          </PrimaryButton>
          <PrimaryButton variant="outlined" onClick={handleClick}>
            Outlined
          </PrimaryButton>
        </div>
      </div>

      {/* Outlined 사이즈 Variations */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Outlined 사이즈 Variations</h2>
        <div className="flex items-center gap-4">
          <PrimaryButton variant="outlined" size="xsmall" onClick={handleClick}>
            XSmall
          </PrimaryButton>
          <PrimaryButton variant="outlined" size="small" onClick={handleClick}>
            Small
          </PrimaryButton>
          <PrimaryButton variant="outlined" size="medium" onClick={handleClick}>
            Medium
          </PrimaryButton>
          <PrimaryButton variant="outlined" size="large" onClick={handleClick}>
            Large
          </PrimaryButton>
        </div>
      </div>

      {/* Outlined 상태 Variations */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Outlined 상태 Variations</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <PrimaryButton variant="outlined" disabled onClick={handleClick}>
              Disabled
            </PrimaryButton>
            <PrimaryButton variant="outlined" loading onClick={handleClick}>
              Loading
            </PrimaryButton>
            <PrimaryButton variant="outlined" loading disabled onClick={handleClick}>
              Loading Disabled
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* 상태 Variations */}
      <div>
        <h2 className="text-xl font-semibold mb-4">상태 Variations</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <PrimaryButton onClick={handleClick}>
              일반 상태
            </PrimaryButton>
            <span className="text-gray-600">기본 활성화 상태</span>
          </div>

          <div className="flex items-center gap-4">
            <PrimaryButton disabled onClick={handleClick}>
              비활성화 상태
            </PrimaryButton>
            <span className="text-gray-600">클릭 불가</span>
          </div>

          <div className="flex items-center gap-4">
            <PrimaryButton loading onClick={handleClick}>
              로딩 중
            </PrimaryButton>
            <span className="text-gray-600">스피너 표시</span>
          </div>

          <div className="flex items-center gap-4">
            <PrimaryButton loading={loading} onClick={handleLoadingClick}>
              {loading ? '처리 중...' : '2초 로딩 테스트'}
            </PrimaryButton>
            <span className="text-gray-600">클릭해서 로딩 테스트</span>
          </div>
        </div>
      </div>

      {/* 사이즈 + 상태 조합 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">사이즈 + 상태 조합</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <PrimaryButton size="small" loading>
              Small Loading
            </PrimaryButton>
            <PrimaryButton size="medium" loading>
              Medium Loading
            </PrimaryButton>
            <PrimaryButton size="large" loading>
              Large Loading
            </PrimaryButton>
          </div>

          <div className="flex items-center gap-4">
            <PrimaryButton size="small" disabled>
              Small Disabled
            </PrimaryButton>
            <PrimaryButton size="medium" disabled>
              Medium Disabled
            </PrimaryButton>
            <PrimaryButton size="large" disabled>
              Large Disabled
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* 전체 너비 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">전체 너비 (Full Width)</h2>
        <div className="space-y-3">
          <PrimaryButton fullWidth onClick={handleClick}>
            전체 너비 버튼
          </PrimaryButton>
          <PrimaryButton fullWidth size="large" onClick={handleClick}>
            전체 너비 Large 버튼
          </PrimaryButton>
          <PrimaryButton fullWidth loading>
            전체 너비 로딩 버튼
          </PrimaryButton>
        </div>
      </div>

      {/* Form에서 사용 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Form에서 사용</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('폼 제출!');
          }}
          className="space-y-3"
        >
          <input
            type="text"
            placeholder="이름을 입력하세요"
            className="px-4 py-2 border rounded-lg w-full"
          />
          <PrimaryButton type="submit" fullWidth>
            제출
          </PrimaryButton>
        </form>
      </div>

      {/* 실제 사용 시나리오 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">실제 사용 시나리오</h2>
        <div className="border rounded-lg p-6 space-y-4">
          <h3 className="font-semibold">회원가입 완료</h3>
          <p className="text-gray-600">환영합니다! 아래 버튼을 클릭하여 시작하세요.</p>
          <div className="flex gap-3">
            <PrimaryButton onClick={handleClick}>
              시작하기
            </PrimaryButton>
            <PrimaryButton size="small" onClick={handleClick}>
              나중에
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ButtonExample;
