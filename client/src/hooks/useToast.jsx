import { toast } from 'sonner';

const useToast = () => {
  const showToastSuccess = (message) => {
    toast.success(message, {
      duration: 2500,
      icon: <i style={{ fontSize: '1.2rem', fontWeight: '500' }} className='bx bx-check-circle'></i>,
      style: {
        fontSize: '0.95rem',
        fontWeight: '500',
        background: 'black',
        color: 'white',
        border: '1px solid black',
      },
    });
  };

  return { showToastSuccess };
};

export default useToast;
