class FoodChooserController < ApplicationController

  def chooser
    @cuisines = Cuisine.all
  end

end
