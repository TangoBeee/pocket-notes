import axios from "axios"
import { SERVER_BASE_URL } from "../config"

export const createGroup = async (groupName, groupColor) => {
	try {
		const response = await axios.post(`${SERVER_BASE_URL}/api/groups`, {
			name: groupName,
			color: groupColor,
		})

        return response.data
	} catch (error) {
		console.error("Error while creating a group: ", error)
		throw error
	}
}

export const fetchAllGroups = async () => {
	try {
		const response = await axios.get(`${SERVER_BASE_URL}/api/groups`)
		return response.data
	} catch (error) {
		console.error("Error fetching groups:", error)
		throw error
	}
}

export const fetchGroupByName = async (groupName) => {
	try {
		const encodedGroupName = encodeURIComponent(groupName)
		const response = await axios.get(`${SERVER_BASE_URL}/api/groups/${encodedGroupName}`)
		return response.data
	} catch (error) {
		console.error("Error fetching group by name:", error)
		throw error
	}
}

export const addNoteInGroup = async (groupName, noteText) => {
	try {
		const response = await axios.post(
			`${SERVER_BASE_URL}/api/groups/${encodeURIComponent(
				groupName
			)}/notes`,
			{
				text: noteText,
			}
		)

		return response.data
	} catch (error) {
		console.error("Error while saving notes: ", error)
		throw error
	}
}
