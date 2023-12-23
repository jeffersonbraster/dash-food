import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { ButtonToggle } from '../theme/theme-toggle'
import { Separator } from '../ui/separator'
import AccountMenu from './account-menu'
import NavLink from './nav-link'

const Header = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator className="h-6" orientation="vertical" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>

          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ButtonToggle />

          <AccountMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
