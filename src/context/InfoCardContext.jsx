import React, { createContext, useState } from 'react';

export const InfoCardContext = createContext({
  openCardId: null,
  previousCardId: null,
  openCard: () => {},
  closeCard: () => {},
});

export function InfoCardProvider({ children }) {
  const [openCardId, setOpenCardId] = useState(null);
  const [previousCardInfo, setPreviousCardInfo] = useState(null);

  // openCard receives optional meta so we can render the closing panel
  // at the correct location (section, index, rowEnd)
  const openCard = (id, meta = null) => {
    if (openCardId && openCardId !== id) {
      setPreviousCardInfo({ id: openCardId, ...(meta || {}) });
    }
    setOpenCardId(id);
  };

  const closeCard = (meta = null) => {
    if (openCardId) {
      setPreviousCardInfo({ id: openCardId, ...(meta || {}) });
    }
    setOpenCardId(null);
  };

  const clearPrevious = () => setPreviousCardInfo(null);

  return (
    <InfoCardContext.Provider value={{ openCardId, previousCardInfo, openCard, closeCard, clearPrevious }}>
      {children}
    </InfoCardContext.Provider>
  );
}

export default InfoCardProvider;
