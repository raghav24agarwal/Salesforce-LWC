public with sharing class ContactManager {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(Integer numberOfRecords) {
        return [Select id, LastName, Phone from Contact LIMIT :numberOfRecords];
    }

}