import React from "react";
import Modal from "./ui/modal";
import usePreviewModal from "@/stores/usePreviewModal";
import Info from "./Info";
import Gallery from "./gallery/Gallery";

function PreviewModal() {
    const [data, isOpen, onClose] = usePreviewModal((state) => [
      state.data,
      state.isOpen,
      state.onClose
    ]);

    if (!data) {
        return null;
    }

    return (
        <Modal open={isOpen} onClose={onClose}>
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    <Gallery images={data.images} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    <Info data={data} />
                </div>
            </div>
        </Modal>
    );
}

export default PreviewModal;
