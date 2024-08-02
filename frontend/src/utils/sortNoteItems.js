export const sortNotesByDateTime = (notes) => {
	if (!notes.length) return []

	return notes.sort((a, b) => {
		const dateA = new Date(`${a.date} ${a.time}`)
		const dateB = new Date(`${b.date} ${b.time}`)
		return dateA - dateB
	})
}
