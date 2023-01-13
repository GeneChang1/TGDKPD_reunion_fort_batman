class User:    
    # constructor of a User object, initializes the instance variables within object (self)
    def __init__(self, name, uid, password):
        self._name = name    # variables with self prefix become part of the object, 
        self._uid = uid
        self.set_password(password)

    # a name getter method, extracts name from object
    @property
    def name(self):
        return self._name
    
    # a setter function, allows name to be updated after initial object creation
    @name.setter
    def name(self, name):
        self._name = name
    
    # a getter method, extracts email from object
    @property
    def uid(self):
        return self._uid