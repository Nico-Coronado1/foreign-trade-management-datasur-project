from flask import Flask
from flask_migrate import Migrate
from .routes.products import product_bp
from .routes.types import types_bp

from . import models


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///products_management_database.db'
migrate = Migrate(app, models.db)
models.db.init_app(app)

app.register_blueprint(product_bp, url_prefix='/products')
app.register_blueprint(types_bp, url_prefix='/types')

with app.app_context():
    models.db.create_all()

    # Types
    type_fruit = models.Type(name='Fruta')
    type_vegetable = models.Type(name='Vegetales')
    type_electronic = models.Type(name='Electronica')
    models.db.session.add(type_fruit)
    models.db.session.add(type_vegetable)
    models.db.session.add(type_electronic)
    models.db.session.commit()
    # Products
    banana = models.Product(name='Banana', image='banana.jpg',
                            quantity_to_export=50, native_country='colombia',
                            exported_quantity=10, type=type_fruit)
    laptop = models.Product(name='Laptop', image='laptop.jpg',
                            quantity_to_export=45, native_country='china',
                            exported_quantity=0, type=type_electronic)
    models.db.session.add(banana)
    models.db.session.add(laptop)
    models.db.session.commit()

    # exported countries
    chile = models.Country(name='Chile', quantity=5, product=banana)
    india = models.Country(name='India', quantity=5, product=banana)
    models.db.session.add(chile)
    models.db.session.add(india)
    models.db.session.commit()