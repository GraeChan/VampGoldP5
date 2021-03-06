function Vampire()
{
	this.vampire = createSprite(this.x, this.y);
	this.vampire.addAnimation("walk", "sprites/vampWalk1.png", "sprites/vampWalk2.png");
	this.vampire.depth = 3;
	this.lives = 3;
	
	this.x = window.innerWidth - 100;
	this.y = 256;
	this.width = 90;
	this.height = 128;
	this.xDir = 0;
	this.yDir = 0;

	this.bIsLeft = false;
	this.bIsRight = false;
	this.bIsUp = false;
	this.bIsDown = false;

	this.direction = function()
	{
		if(bIsEye == true)
		{
			if(this.x - gaze.eye.position.x  > 10)
			{
				this.bIsLeft = true;
				this.bIsRight = false;
			}
			else if(this.x - gaze.eye.position.x < -10)
			{
				this.bIsLeft = false;
				this.bIsRight = true;
			}
			else
			{
				this.bIsLeft = false;
				this.bIsRight = false;
			}
			

			if(this.y - gaze.eye.position.y > 10)
			{
				this.bIsUp = true;
				this.bIsDown = false;
			}
			else if(this.y - gaze.eye.position.y < -10)
			{
				this.bIsUp = false;
				this.bIsDown = true;
			}
			else
			{
				this.bIsUp = false;
				this.bIsDown = false;
			}
		}
		else if(bIsEye == false)
		{
			if(this.x - gaze.eye.position.x > 10 && this.x < innerWidth - this.width/2)
			{
				this.bIsLeft = false;
				this.bIsRight = true;
			}
			else if(this.x - gaze.eye.position.x < -10 && this.x > 0 + this.width/2)
			{
				this.bIsLeft = true;
				this.bIsRight = false;
			}
			else 
			{
				this.bIsLeft = false;
				this.bIsRight = false;
			}
			

			if(this.y - gaze.eye.position.y > 10 && this.y < innerHeight - this.height/2)
			{
				this.bIsUp = false;
				this.bIsDown = true;
			}
			else if(this.y - gaze.eye.position.y < -10 && this.y > 0 + this.height/2)
			{
				this.bIsUp = true;
				this.bIsDown = false;
			}
			else
			{
				this.bIsUp = false;
				this.bIsDown = false;
			}
		}
		
	}

	this.move = function()
	{
		this.direction();

		if(this.bIsLeft == true)
		{
			this.vampire.mirrorX(+1);
			this.x-=1;
			
		}
		
		if(this.bIsRight == true)
		{
			this.vampire.mirrorX(-1);
			this.x+=1;
		}
		
		if(this.bIsUp == true)
		{
			
			this.y-=1;
			
		}

		if(this.bIsDown == true)
		{
			this.y+=1;
			
		}
	
	}

}