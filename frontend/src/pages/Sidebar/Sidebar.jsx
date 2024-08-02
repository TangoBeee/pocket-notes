import React, { useEffect, useState } from 'react'
import { SidebarContainer } from './Sidebar.styled'
import GroupItem from '../../components/GroupItem'
import AddGroupButton from '../../components/AddGroupButton'
import Modal from '../../components/AddGroupModal'
import { fetchAllGroups } from '../../utils/api'

const Sidebar = ({ onGroupClick }) => {
  const [groups, setGroups] = useState([]);
  const [openModal, setOpenModal] = useState(false)


  const loadGroups = async () => {
    try {
      const data = await fetchAllGroups()
      setGroups(data)
    } catch (err) {
      console.log('Failed to load groups.')
    }
  };

  useEffect(() => {
    loadGroups();
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
      setOpenModal(true);
  };

  return (
    <>
      <SidebarContainer>
          <div className='sidebar-header-wrapper'>
              <h1 className='sidebar-header'>Pocket Name</h1>
          </div>

          <div className='group-items-wrapper'>
            {groups.map((item, index) => (
              <GroupItem
                key={`group-item-${index}`}
                color={item.color}
                name={item.name}
                onClick={() => {
                  onGroupClick(item)
                }}
              />
            ))}

            {!groups.length ? <div className='no-groups'>No Group Found</div> : ""}

            <AddGroupButton handleOpenModal={handleOpenModal} />
          </div>
      </SidebarContainer>

      <Modal isOpen={openModal} onClose={handleCloseModal} setGroups={setGroups} />
    </>
  )
}

export default Sidebar