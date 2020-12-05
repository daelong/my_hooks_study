export const useConfirm = (message = "", callback, reject) => {
  if (!callback && typeof callback !== "function") {
    return;
  }
  if (!reject && typeof reject !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      reject();
    }
  };
  return confirmAction;
};
