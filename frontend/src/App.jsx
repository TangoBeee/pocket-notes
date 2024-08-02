import React, { useEffect, useState } from "react"

import Home from "./pages/Home/Home"
import "./App.css"
import Sidebar from "./pages/Sidebar/Sidebar"
import NotesSection from "./pages/NotesSection/NotesSection"
import { fetchGroupByName } from "./utils/api"

const App = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)
	const [selectedGroup, setSelectedGroup] = useState(null)
	const [showHome, setShowHome] = useState(true)

	const handleGroupClick = async (group) => {
		const groupData = await fetchGroupByName(group.name)
		setSelectedGroup(groupData)
		setShowHome(false)
	}

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth)
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<div className="main-container">
			{screenWidth < 900 ? (
				!selectedGroup ? (
					<Sidebar onGroupClick={handleGroupClick} />
				) : showHome ? (
					<Home />
				) : (
					<NotesSection
						groupName={selectedGroup.name}
						groupColor={selectedGroup.color}
						groupNotes={selectedGroup.notes}
						setSelectedGroup={setSelectedGroup}
					/>
				)
			) : (
				<>
					<Sidebar onGroupClick={handleGroupClick} />
					{showHome ? (
						<Home />
					) : (
						<NotesSection
							groupName={selectedGroup.name}
							groupColor={selectedGroup.color}
							groupNotes={selectedGroup.notes}
							setSelectedGroup={setSelectedGroup}
						/>
					)}
				</>
			)}
		</div>
	)
}

export default App
