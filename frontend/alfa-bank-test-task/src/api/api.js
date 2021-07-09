export const getUsers = async () => {
    const response = await fetch('http://127.0.0.1:3000/user')
    const users = await response.json()
    return users
}
