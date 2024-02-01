class Rectangle:

	def __init__(self,length,breadth):
		self.length = length
		self.breadth = breadth

	def show(self):
		print("length = ", self.length)
		print("breadth = ", self.breadth)
	def area(self):
		ans= self.length * self.breadth
		print("area = ",ans)
	def peri(self):
		ans= 2 * (self.length * self.breadth)
		print("peri = ",ans)

r1 = Rectangle(2.3,4.5)
r1.show()
r1.area()
r1.peri()
print("8" * 50)

r12 = Rectangle(3.3,6.5)
r1.show()
r1.area()
r1.peri()