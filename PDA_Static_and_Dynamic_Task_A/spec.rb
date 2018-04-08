require ('minitest/autorun')
require ('minitest/rg')
require_relative('card')
require_relative('testing_task_2_working')

class CardTest < Minitest::Test

  def setup()

    @card1 = Card.new("spade", 1)
    @card2 = Card.new("diamond", 9)
    @card3 = Card.new("heart", 5)
    @cards = [@card1, @card2, @card3]

    @cardgame = CardGame.new
  end

  def test_checkforace()
    result = @cardgame.checkforace(@card1)
    assert_equal(true, result)
  end

  def test_highest_card()
    result = @cardgame.highest_card(@card1, @card2)
    assert_equal(9, result)
  end

  def test_cards_total()
    result = @cardgame.cards_total(@cards)
    assert_equal("You have a total of 15", result)
  end

end
