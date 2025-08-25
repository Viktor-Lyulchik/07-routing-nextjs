'use client';

import css from './Modal.module.css';
import { useRouter } from 'next/navigation';

type NotePreviewModalProps = {
  children: React.ReactNode;
};

const NotePreviewModal = ({ children }: NotePreviewModalProps) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default NotePreviewModal;
