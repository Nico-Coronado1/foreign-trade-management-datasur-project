from ..models import Type
from flask import Blueprint, jsonify, request

types_bp = Blueprint('types', __name__)


@types_bp.route('/api/types', methods=['GET'])
def get_types():
    try:
        types = Type.query.all()

        type_data = {'types': [typeobj.name for typeobj in types]}

        return jsonify({'types': type_data})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
