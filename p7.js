class Circle:

	def __init__(self,radius):
		self.radius = radius

	def show(self):
		print("radius = ", self.radius)
	def area(self):
		ans= 3.14 * self.radius ** 2
		print("area = ",ans)
	def circle(self):
		ans = 2 * 3.14 * self.radius
		print("circle = ", ans)
	def diameter(self):
		ans= 2 * self.radius
		print("diameter = ", ans)

c1 = Circle(2.5)
c1.show()
c1.area()
c1.circle()
c1.diameter()
print("*" * 50)

c2 = Circle(3.5)
c2.show()
c2.area()
c2.circle()
c2.diameter()
print("*" * 50)

c3 = Circle(5.66)
c3.show()
c3.area()
c3.circle()
c3.diameter()
