import { Banner } from '../../components/Banner';
import { ProductItem } from '../../components/ProductItem';
import { SearchInput } from '../../components/SearchInput';
import styles from '../../styles/Home.module.css'

const Home = () => {

	const handleSearch = (searchValue: string) => {
	  console.log('voce esta buscando por ' + searchValue)
	}
  
	return(
		<div className={styles.container}>
			<header className={styles.header}>
				<div className={styles.headerTop}>
					<div className={styles.headerTopLeft}>
						<div className={styles.headerTilte}>Seja Bem Vindo (a) 👋</div>
						<div className={styles.headerSubTitle}>O que deseja pra hoje?</div>
					</div>
					<div className={styles.headerTopRight}>
						<div className={styles.menuButtom}>
						<div className={styles.menuButtomLine}></div>
						<div className={styles.menuButtomLine}></div>
						<div className={styles.menuButtomLine}></div>
						</div>
					</div>
				</div>
				<div className={styles.headerBottom}>
					<SearchInput 
					mainColor='#FB9400' 
					onSearch={handleSearch}
					
					/>
				</div>
			</header>

			<Banner />

			<div className={styles.grid}>
			<ProductItem secondColor='#FFF9f2' mainColor='#FB9400' data={{ id:1,image:'/temp/burger.png', categoryName:'Tradicional', name:'Texas Burger', price: 'R$ 25,50' }}/>
			<ProductItem secondColor='#FFF9f2' mainColor='#FB9400'data={{ id:2,image:'/temp/burger.png', categoryName:'Tradicional', name:'Texas Burger', price: 'R$ 25,50' }}/>
			<ProductItem secondColor='#FFF9f2' mainColor='#FB9400'data={{ id:3,image:'/temp/burger.png', categoryName:'Tradicional', name:'Texas Burger', price: 'R$ 25,50' }}/>
			<ProductItem secondColor='#FFF9f2' mainColor='#FB9400'data={{ id:4,image:'/temp/burger.png', categoryName:'Tradicional', name:'Texas Burger', price: 'R$ 25,50' }}/>
			<ProductItem secondColor='#FFF9f2' mainColor='#FB9400'data={{ id:5,image:'/temp/burger.png', categoryName:'Tradicional', name:'Texas Burger', price: 'R$ 25,50' }}/>
			<ProductItem secondColor='#FFF9f2' mainColor='#FB9400'data={{ id:6,image:'/temp/burger.png', categoryName:'Tradicional', name:'Texas Burger', price: 'R$ 25,50' }}/>
			
				
			</div>
		</div>
	)
}

export default Home;