#object oriented programming

class EvenOdd:
	def __init__ (self, number):
		self.number = number
	
	def check(self):
		if self.number % 2 == 0:
			print("even")
		else:
			print("odd")

n = int(input("enter the number"))
e = EvenOdd(n)
e.check()