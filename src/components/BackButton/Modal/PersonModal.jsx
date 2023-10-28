import { DetailsCreditsPerson } from 'components/Person/DetailsCreditsPerson';
import { Person } from 'components/Person/Person';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',

    right: '75%',
    bottom: 'auto',

    maxHeight: '80%',
    overflow: 'auto',

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
      <div>
        <Person personId={personId} />
        <DetailsCreditsPerson personId={personId} />
      </div>
    </Modal>
  );
};

export { PersonModal };
