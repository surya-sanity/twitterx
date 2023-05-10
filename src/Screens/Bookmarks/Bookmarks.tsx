import HeaderTabItem from '../../Components/PageHeader/HeaderTabItem'
import PageHeader from '../../Components/PageHeader/PageHeader'

const Bookmarks = () => {
  return (
    <PageHeader
      name="Bookmarks">
      <HeaderTabItem to="/bookmarks/one" name="One" />
    </PageHeader>
  )
}

export default Bookmarks