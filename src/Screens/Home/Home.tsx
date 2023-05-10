import HeaderTabItem from "../../Components/PageHeader/HeaderTabItem"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { useDefaultTabNav } from "../../Hooks/useDefaultTabNav"

const Home = () => {
  useDefaultTabNav({ endsWith: "/home", navTo: "/home/foryou" })

  return (
    <PageHeader
      name="Home">
      <HeaderTabItem to="/home/foryou" name="For you" />
      <HeaderTabItem to="/home/following" name="Following" />
    </PageHeader>
  )
}

export default Home