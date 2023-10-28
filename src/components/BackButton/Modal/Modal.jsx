import { Person } from 'components/Person/Person';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const PersonModal = ({ modalIsOpen, closeModal, personId }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      <Person personId={personId} />
    </Modal>
  );
};

export { PersonModal };
