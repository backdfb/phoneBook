
export const saveState = async (state) => {
  try {
    const serializedState = JSON.stringify(state);
    await new Promise((resolve) => setTimeout(() => {
      localStorage.setItem('state', serializedState);
      resolve();
    }, 1000)); 
    console.log("상태 저장 성공");
  } catch (err) {
    console.error("상태 저장 실패:", err);
  }
};

export const loadState = async () => {
  try {
    const serializedState = await new Promise((resolve, reject) => setTimeout(() => {
      const result = localStorage.getItem('state');
      if (result !== null) {
        resolve(result);
      } else {
        reject("저장된 상태 없음");
      }
    }, 1000)); 

    return JSON.parse(serializedState);
  } catch (err) {
    console.error("불러오기 실패:", err);
    return undefined;
  }
};
  