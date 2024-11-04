import LeaveModal from '../../components/LeaveModal';

export default function LeaveButton({ groupId }) {
  const leaveModalId = 'leave-modal-button-id' + groupId;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          document.getElementById(leaveModalId).showModal();
        }}
      >
        <button type="submit" className="btn">
          Leave
        </button>
      </form>
      <LeaveModal
        modalId={leaveModalId}
        groupId={groupId}
        navigateTo="/app/search"
      />
    </>
  );
}
