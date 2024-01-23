import { useParams } from 'react-router-dom'

const ProductPage = ({ data }) => {
	const { id } = useParams()
	
	const offer  =[];
	const searchID = () => {
		for (let i = 0; i < data.length; i++) {
			if (data[i]._id === id) {
				offer.push(data[i])
			}
		}
		return offer
	}
	searchID()

	return (
		<div className=" h-full  bg-[#EBEDEE]">
			<div
				className=" lg:justify-around mt-20 flex 
			max-lg:flex-col max-lg:items-center"
			>
				<img
					className="my-20 max-lg:w-11/12 lg:w-[40%] object-fill "
					src={offer[0]?.product_image}
					alt="image"
				/>
				<div className="my-20 max-lg:w-11/12 max-lg:my-10 px-2 lg:w-[40%] bg-white ">
					<div className="h-1/3">
						<div className="text-2xl my-3">{offer[0].product_price} €</div>
						<div className="flex justify-between">
							<span className="text-gray-400">MARQUE</span>{' '}
							<span className="text-gray-600">
								{offer[0]?.product_details[0].MARQUE}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-400">TAILLE</span>{' '}
							<span className="text-gray-600">
								{offer[0]?.product_details[1].TAILLE}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-400">ÉTAT</span>{' '}
							<span className="text-gray-600">
								{offer[0]?.product_details[2].ÉTAT}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-400">COULEUR</span>{' '}
							<span className="text-gray-600">
								{offer[0]?.product_details[3].COULEUR}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-400">EMPLACEMENT</span>{' '}
							<span className="text-gray-600">
								{offer[0].product_details[4].EMPLACEMENT}
							</span>
						</div>
					</div>

					<div className="h-1/5">
						<div className="text-gray-800 font-bold mt-8 my-2">
							{offer[0].product_name}
						</div>
						<div className="text-gray-600">{offer[0].product_description}</div>
					</div>

					<div className=" flex items-center my-4">
						<img
							className="p-1 w-10 h-10 object-fill rounded-full"
							src={offer[0].owner?.account?.avatar?.secure_url}
						/>
						<div className="p-1 text-xs">{offer[0].owner.account.username}</div>
					</div>

					<button className="w-full my-4 bg-blue-vinted rounded-md text-white h-10 my-20">
						Acheter
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductPage