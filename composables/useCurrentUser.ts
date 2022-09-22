export const useCurrentUser = () => {
    return useState('currentUser', () => null)
}