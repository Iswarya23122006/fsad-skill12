package klu.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import klu.repository.FacultyRepository;

@Service
public class FacultyManager {
	@Autowired
	FacultyRepository FR;
	
	//INSERT OPERATION
	public String insertData(Faculty F)throws Exception
	{
		FR.save(F); //INSERT
		return "New faculty data has been added";
	}
	
	//READ OERATION
	public List<Faculty> readData()throws Exception
	{
		return FR.findAll();
	}
	
	//UPDATE OPERATION
	public String updateData(Faculty F)throws Exception
	{
		Faculty temp = FR.findById(F.getFid()).get();
		temp.setFname(F.getFname());
		temp.setDept(F.getDept());
		FR.save(temp);
		return "Faculty data has been updated";
	}
	
	//DELETE OPERATION
	public String deleteData(Long id)throws Exception
	{
		Faculty temp = FR.findById(id).get();
		FR.delete(temp);
		return "Faculty data has been deleted";
	}
}
