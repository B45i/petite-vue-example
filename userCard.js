export const UserCard = user => ({
    $template: '#user-template',

    // user: user, not needed, user props dirctly

    follow() {
        this.user.isFollowed = !this.user.isFollowed;
    },
});
