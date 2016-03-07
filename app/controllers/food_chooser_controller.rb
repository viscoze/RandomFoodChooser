class FoodChooserController < ApplicationController
  def chooser
    @cuisines = Cuisine.all
  end

  def invoke_random
    
  end

end
