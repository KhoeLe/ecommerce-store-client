import { create } from "zustand";

interface PreviewModalState {
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product) => void;
    onClose: () => void;
}

const usePreviewModal = create<PreviewModalState>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false }),
  }));

  export default usePreviewModal;
