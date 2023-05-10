import HeaderTabItem from '../../Components/PageHeader/HeaderTabItem'
import PageHeader from '../../Components/PageHeader/PageHeader'
import { useDefaultTabNav } from '../../Hooks/useDefaultTabNav'

const Bookmarks = () => {
  useDefaultTabNav({ endsWith: 'bookmarks', navTo: "/bookmarks/one" })
  return (
    <PageHeader
      name="Bookmarks">
      <HeaderTabItem to="/bookmarks/one" name="One" />
    </PageHeader>
  )
}

export default Bookmarks