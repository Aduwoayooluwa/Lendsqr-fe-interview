export const getUserameFromEmail = (email: string) => {
    const username = email.split("@")
    return username[0]
}