class User:    
    # constructor of a User object, initializes the instance variables within object (self)
    def __init__(self, name, uid, password):
        self._name = name    # variables with self prefix become part of the object, 
        self._uid = uid
        self.set_password(password)


    @property
    def name(self):
        return self._name
    

    @property
    def uid(self):
        return self._uid

    @property
    def dob(self):
        return self._dob

    @property
    def password(self):
        return self._password