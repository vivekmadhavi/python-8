class Student:

	def __init__(self,roll,name,address,marks):
		self.roll = roll
		self.name = name
		self.address = address
		self.marks = marks

	def show(self):
		print("roll = ", self.roll)
		print("name = ", self.name)
		print("address = ", self.address)
		print("marks = ", self.marks)
	def findGrade(self):
		if self.marks >80:
			print("A")
		elif self.marks >60:
			print("B")
		else:
			print("C")

s1 = Student(22,"vivek","uran",89)
s1.show()
s1.findGrade()

