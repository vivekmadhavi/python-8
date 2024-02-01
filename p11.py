class Book:
	def  __init__(self, id , title, author, price):
		self.id = id
		self.title = title
		self.author = author
		self.price = price

	def show(self):
		print("id = ",self.id)
		print("title = ",self.title)
		print("author = ",self.author)
		print("price = ",self.price)

	def inc_price(self,amt):
		self.price = self.price + amt
	
	def decr_price(self,amt):
		self.price = self.price - amt

b1 = Book(23,"ml","kamal",500)
b1.show()
b1.inc_price(50)
b1.show()
b1.decr_price(20)
b1.show()