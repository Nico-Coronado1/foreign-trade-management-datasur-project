from  ..models import Product
from flask import Blueprint, jsonify, request

product_bp = Blueprint('products', __name__)


@product_bp.route('/api/products', methods=['GET'])
def get_products():
    try:
        products = Product.query.all()

        product_data = [
            {
                'id': product.id,
                'name': product.name,
                'image': product.image,
                'native_country': product.native_country,
                'quantity_to_export': product.quantity_to_export,
                'exported_quantity': product.exported_quantity,
                'type': product.type.name,
                'exported_to': [
                    {'id': country.id, 'name': country.name, 'quantity': country.quantity}for country in product.exported_to
                ]
            }
            for product in products
        ]
        print(product_data)
        return jsonify({'products': product_data})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
