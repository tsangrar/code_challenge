$(document).ready(function () {
	/* Variable declarations */
	var product_name;
	var product_image;
	var product_price;
	var cart_p_name, cart_p_id;
	var divtext;
	var titletext;
	var img_text;
	var price_text;
	/* JSON Data into a JavaScript array for data manipulation*/
	var products_data = [
		{
			"isPublished": "true",
			"productName": "Apple iPhone X",
			"productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
			"price": "299"
    },
		{
			"isPublished": "true",
			"productName": "Apple iPhone 8",
			"productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png",
			"price": "100"
    },
		{
			"isPublished": "false",
			"productName": "Apple iPhone 8 Plus",
			"productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8plus-space-grey-grid.png",
			"price": "99"
    },
		{
			"isPublished": "true",
			"productName": "Samsung Galaxy S9",
			"productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/samsung-galaxy-s9/samsung-galaxy-s9-purple-front.png",
			"price": "149"
    },
		{
			"isPublished": "true",
			"productName": "OPPO R15 Pro",
			"productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/oppo-r15-pro/oppo-r15-device-front.png",
			"price": "199"
    },
		{
			"isPublished": "true",
			"productName": "Sony Xperia XA2",
			"productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png",
			"price": "19"
    }
];

	/*For loop to get the product name, product image src, and product price*/

	for (i = 0; i < products_data.length; i++) {
		if ((products_data[i]['isPublished']) == "true") {
			product_name = products_data[i]['productName'];
			product_image = products_data[i]['productImage'];
			product_price = products_data[i]['price'];
			createProducts(i, product_name, product_image, product_price);
		}
	}

	/*Function on click of the button "Add To Cart"*/

	$(".cart_add").click(function () {
		var cart_pro_name = $(this).parent('.product').find('.product_name').text();
		var cart_pro_id = $(this).parent().attr('id');
		$(this).parent('.product').hide();
		addcart(cart_pro_name, cart_pro_id);
	});

});


/*Function to create the product divs using the JSON data*/

function createProducts(j, p_name, p_image, p_price) {
	var button = '<button type="button" class="btn cart_add">Add To Cart</button>';
	var div_end = '</div>'
	divtext = '<div class="product col-lg-3 col-lg-offset-1 col-md-12 col-sm-12 col-xs-8" id="pro_' + j + '">';
	titletext = '<h4 class="product_name">' + p_name + '</h4>';
	img_text = '<img src="' + p_image + '"class="product_img">';
	price_text = '<p class="product_price"> $' + p_price + '</p>';
	$(".product_container").append(divtext + titletext + img_text + price_text + button + div_end);
}

/*Function to add the product to the shopping cart*/

function addcart(cart_p_name, cart_p_id) {
	var divcart = '<div class="product_cart">';
	var divcartname = '<span class="product_cart_name">' + cart_p_name + '</span>';
	var cart_btn = '<button type="button" class="btn cart_remove" id="' + cart_p_id + '">Remove</button>';
	var divcart_end = '</div>';
	$(".cart").append(divcart + divcartname + cart_btn + divcart_end);
		/*Function to remove the products from the shopping cart and back to the products list*/
		$(".cart_remove").click(function () {
			$(this).parent('.product_cart').hide();
			var showElem = $(this).attr('id');
			$("#" + showElem).show();
		});
}