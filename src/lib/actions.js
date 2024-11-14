"use server"
import React from 'react'
import { wixClientServer } from './wixClientServer'

export const updateUser = async (formData) => {
    const wixClient = await wixClientServer();
    const id = formData.get("id");
    const username = formData.get("username");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");

    try {
    const response = await wixClient.members.updateMember(id, {
      contact: {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        phones: [phone] || undefined,
      },
      loginEmail: email || undefined,
      profile: { nickname: username || undefined },
    });

    console.log(response)
  } catch (err) {
    console.log(err);
  }
  
}

