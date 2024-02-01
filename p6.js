#oop

class Square:

	def __init__(self, number):
		self.number = number
	def compute(self):
		res = self.number * self.number
		res = round(res,2)
		print("square = ",res)

n= float(input("enter number "))
s = Square(n)
s.compute()