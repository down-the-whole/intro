import { BaseLink, useRoute } from 'react-router5'

export default () => {
    const { router } = useRoute()

    return (
        <nav>
            <BaseLink
                router={router}
                routeName="inbox"
                routeOptions={{ reload: true }}
            >
                Inbox
            </BaseLink>
            <BaseLink router={router} routeName="contact">
                Contact
            </BaseLink>
            <BaseLink router={router} routeName="about">
                About
            </BaseLink>
        </nav>
    )
}
