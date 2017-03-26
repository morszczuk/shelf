class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item.as_json
    else
      render nothing: true, status: bad_request
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :company, :category, :amount, :cardinality, :unit, :due_date)
  end

end
