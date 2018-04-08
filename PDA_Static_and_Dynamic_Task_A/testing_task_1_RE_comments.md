### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby


require_relative('card.rb')
class CardGame


  def checkforAce(card) #method name should be all lower case: would suggest using check_for_ace instead
    if card.value = 1 # this should be if card.value == 1 (is equal to 1)
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #typo on this line, should be 'def' not 'dif'. We're also missing commas between the given parameters (should be card1, card2).
  if card1.value > card2.value
    return card.name # this should be return card1.value (assuming the test wants to return the value of the highest card)
  else
    card2   #this should say return card2.value (assuming the test wants to return the value of the lowest card)
  end
end
end # there is an extra end here (redundant)

def self.cards_total(cards) # this doesn't have to be a class method: remove self
  total # this line is incomplete: suggest 'total = 0'
  for card in cards
    total += card.value # need a end here to close the loop before it returns only the value of the first item it loops through.
    return "You have a total of" + total # two things: for neatness, add one space after 'of' in the string, and, add .to_s after total to ensure it remains part of a string.
  end
end

#add an end here to close the class

```
