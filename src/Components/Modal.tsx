import { useNavigate } from 'react-router';

const Modal = () => {
  const navigate = useNavigate();

  const handleClose = () => navigate(-1)

  return (
    <div className="bg-darkOverlay bg-opacity-70 overflow-hidden mx-auto absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center" onClick={handleClose}>
      <div className="w-[30rem] h-[20rem] rounded-lg shadow-sm p-5 bg-light  dark:bg-dark " onClick={(e) => e.stopPropagation()}>
        <h3>Modal</h3>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;