@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name, :item_ids, :attack, :defense, :moves, :poke_type
    json.image_url asset_path(poke.image_url)
  end
end
