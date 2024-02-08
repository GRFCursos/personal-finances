import { Button } from "../../Button"
import {
    Container,
    Footer,
    Header,
    HeaderIcon,
    HeaderLogo,
    Link,
    Navigation,
    NavigationItem,
    NavigationItemIcon,
    NavigationItemLabel,
    User,
    UserAvatar,
    UserName
} from "./styles"
import { MdOutlineDashboard } from "react-icons/md";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { useLocation } from "react-router-dom";

const menuItems = [
    { label: 'Dashboard', url: '/', icon: <MdOutlineDashboard /> }
]

export const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true)

    const auth = useAppSelector((state) => state.auth)
    const { pathname } = useLocation();

    const toggleExpansion = () => setIsExpanded(!isExpanded)

    return (
        <Container $expanded={isExpanded}>
            <Header>
                {isExpanded &&
                    <Link to='/'>
                        <HeaderLogo
                            src="/logo.png"
                            alt="Logo Image"
                        />
                    </Link>
                }

                <Button onClick={toggleExpansion} borderRadius="rounded">
                    <HeaderIcon />
                </Button>
            </Header>

            <Navigation>
                {menuItems.map((item, key) => (
                    <Link to={item.url} key={key}>
                        <NavigationItem $isActive={pathname == item.url}>
                            <NavigationItemIcon>
                                {item.icon}
                            </NavigationItemIcon>
                            <NavigationItemLabel>
                                {item.label}
                            </NavigationItemLabel>
                        </NavigationItem>
                    </Link>
                ))}
            </Navigation>

            <Footer>
                <Link to='/account'>
                    <User>
                        <UserAvatar>
                            {auth.user?.name.slice(0, 2)}
                        </UserAvatar>
                        <UserName>
                            {auth.user?.name}
                        </UserName>
                    </User>
                </Link>
            </Footer>
        </Container>
    )
}